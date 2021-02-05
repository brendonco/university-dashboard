import { rest } from 'msw';

export const handlers = [
    rest.post('/search?name=jakarta', (req, res, ctx) => {
        const { username } = req.body;

        return res(
            ctx.json([
                {
                    alpha_two_code: 'ID',
                    country: 'Indonesia',
                    domains: ['pnj.ac.id'],
                    name: 'Politeknik Negeri Jakarta',
                    'state-province': null
                },
                {
                    alpha_two_code: 'ID',
                    country: 'Indonesia',
                    domains: ['ibnuchaldun.ac.id'],
                    name: 'Universitas Ibn Chaldun Jakarta',
                    'state-province': null
                },
                {
                    alpha_two_code: 'ID',
                    country: 'Indonesia',
                    domains: ['umj.ac.id'],
                    0: 'umj.ac.id',
                    name: 'Universitas Muhammadiyah Jakarta',
                    'state-province': null
                }
            ])
        );
    })
];
