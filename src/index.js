import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { API_BASE_URL } from './constants';

const app = express();

app.use(
    '/api',
    proxy(API_BASE_URL, {
        proxyReqOptDecorator(opts) {
            opts.headers['X-Forwarded-Host'] = 'localhost:8080';
            // opts.headers['X-Forwarded-Host'] = 'sharing-panda-ui.herokuapp.com';
            return opts;
        }
    })
);

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });
    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        if (context.url) {
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server initialized on // ${new Date()}`));