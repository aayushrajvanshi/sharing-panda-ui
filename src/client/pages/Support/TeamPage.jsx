import React from 'react';
import TeamMember from '../../components/Support/TeamMember';

const TeamPage = () => (
    <div className="uk-section">
        <div className="uk-container uk-text-center">
            <div className="uk-heading-primary">Our Team</div>
            <p>Aliquip duis dolor pariatur amet sunt velit officia ipsum consectetur reprehenderit reprehenderit. Eiusmod proident nulla est nulla velit dolor et eu qui laborum ipsum dolore exercitation ea. Aute tempor quis cupidatat pariatur. Tempor sunt exercitation mollit aute incididunt ea fugiat ullamco minim Lorem. Labore ut duis minim ad enim minim qui anim. Cillum nisi est culpa dolore elit sit amet esse. Minim veniam ut in non aliqua.</p>
            <div className="uk-section">
                <div className="uk-grid-small uk-child-width-1-3@s uk-child-width-1-4@m uk-flex-center uk-text-center" data-uk-grid>
                    <div>
                        <TeamMember />
                    </div>
                    <div>
                        <TeamMember />
                    </div>
                    <div>
                        <TeamMember />
                    </div>
                    <div>
                        <TeamMember />
                    </div>
                    <div>
                        <TeamMember />
                    </div>
                    <div>
                        <TeamMember />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default {
    component: TeamPage
}
