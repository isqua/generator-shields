module.exports = {
    items: [
        'npm',
        'travis',
        'coverage',
        'climate',
        'deps',
        'devdeps',
        'peerdeps'
    ],
    shields: {
        npm: {
            message: 'Add NPM version shield',
            text: 'NPM version',
            path: 'npm/v/{npmName}',
            link: 'https://npmjs.org/package/{npmName}'
        },
        travis: {
            message: 'Add Travis-CI shield',
            text: 'Build status',
            path: 'travis/{repo}',
            link: 'https://travis-ci.org/{repo}'
        },
        coverage: {
            message: 'Add COVERALLS shield',
            text: 'Test coverage',
            path: 'coveralls/{repo}',
            link: 'https://coveralls.io/r/{repo}?branch=master'
        },
        climate: {
            message: 'Add Code Climate shield',
            text: 'Code climate',
            path: 'codeclimate/github/{repo}',
            link: 'https://codeclimate.com/github/{repo}'
        },
        deps: {
            message: 'Add dependencies shield',
            text: 'Dependency status',
            path: 'david/{repo}',
            link: 'https://david-dm.org/{repo}'
        },
        devdeps: {
            message: 'Add devDependencies shield',
            text: 'devDependency status',
            path: 'david/dev/{repo}',
            link: 'https://david-dm.org/{repo}#info=peerDependencies'
        },
        peerdeps: {
            message: 'Add peerDependencies shield',
            text: 'peerDependency status',
            path: 'david/peer/{repo}',
            link: 'https://david-dm.org/{repo}#info=peerDependencies'
        }
    }
};
