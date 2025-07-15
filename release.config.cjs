module.exports = {
    branches: ['master'],
    repositoryUrl: 'https://github.com/KaruzG/pablo-planells',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      ['@semantic-release/changelog', {
        changelogFile: 'CHANGELOG.md',
      }],
      ['@semantic-release/git', {
        assets: ['package.json', 'CHANGELOG.md', 'package-lock.json'], 
        message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes}',
      }],
    ],
  };