const rateLimitResponse = {
  resources: {
    core: {
      limit: 60,
      remaining: 59,
      reset: 1535752663
    },
    search: {
      limit: 10,
      remaining: 10,
      reset: 1535749141
    },
    graphql: {
      limit: 0,
      remaining: 0,
      reset: 1535752681
    }
  },
  rate: {
    limit: 60,
    remaining: 59,
    reset: 1535752663
  }
};
const getReadmeResponse = 'Mock Readme.';
const getRepoLanguagesResponse = {
  JavaScript: 179061,
  HTML: 8723,
  CSS: 804,
  Dockerfile: 352
};

const getRepoContributorsResponse = [
  {
    login: "froi",
    id: 1918027,
    node_id: "MDQ6VXNlcjE5MTgwMjc=",
    avatar_url: "https://avatars0.githubusercontent.com/u/1918027?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/froi",
    html_url: "https://github.com/froi",
    followers_url: "https://api.github.com/users/froi/followers",
    following_url: "https://api.github.com/users/froi/following{/other_user}",
    gists_url: "https://api.github.com/users/froi/gists{/gist_id}",
    starred_url: "https://api.github.com/users/froi/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/froi/subscriptions",
    organizations_url: "https://api.github.com/users/froi/orgs",
    repos_url: "https://api.github.com/users/froi/repos",
    events_url: "https://api.github.com/users/froi/events{/privacy}",
    received_events_url: "https://api.github.com/users/froi/received_events",
    type: "User",
    site_admin: false,
    contributions: 368
  }
];

const getUsersResponse = {
  login: "froi",
  id: 1918027,
  node_id: "MDQ6VXNlcjE5MTgwMjc=",
  avatar_url: "https://avatars0.githubusercontent.com/u/1918027?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/froi",
  html_url: "https://github.com/froi",
  followers_url: "https://api.github.com/users/froi/followers",
  following_url: "https://api.github.com/users/froi/following{/other_user}",
  gists_url: "https://api.github.com/users/froi/gists{/gist_id}",
  starred_url: "https://api.github.com/users/froi/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/froi/subscriptions",
  organizations_url: "https://api.github.com/users/froi/orgs",
  repos_url: "https://api.github.com/users/froi/repos",
  events_url: "https://api.github.com/users/froi/events{/privacy}",
  received_events_url: "https://api.github.com/users/froi/received_events",
  type: "User",
  site_admin: false,
  name: "Froilan Irizarry",
  company: "@fullstacknights ",
  blog: "http://froilanirizarry.me",
  location: "Washington, DC",
  email: null,
  hireable: null,
  bio: "Tech lead @ Code.gov | Co-founder @fullstacknights \r\n\r\ncode.gov specific questions or feedback please take a look at https://github.com/GSA/code-gov",
  public_repos: 59,
  public_gists: 40,
  followers: 76,
  following: 90,
  created_at: "2012-07-03T12:31:20Z",
  updated_at: "2018-08-28T16:26:23Z"
};

const getRepoIssuesResponse = [
  {
    url: "https://api.github.com/repos/GSA/code-gov-api/issues/243",
    repository_url: "https://api.github.com/repos/GSA/code-gov-api",
    labels_url: "https://api.github.com/repos/GSA/code-gov-api/issues/243/labels{/name}",
    comments_url: "https://api.github.com/repos/GSA/code-gov-api/issues/243/comments",
    events_url: "https://api.github.com/repos/GSA/code-gov-api/issues/243/events",
    html_url: "https://github.com/GSA/code-gov-api/issues/243",
    id: 348100631,
    node_id: "MDU6SXNzdWUzNDgxMDA2MzE=",
    number: 243,
    title: "Replace Bunyan with another logger package",
    user: {
      login: "froi",
      id: 1918027,
      node_id: "MDQ6VXNlcjE5MTgwMjc=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1918027?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/froi",
      html_url: "https://github.com/froi",
      followers_url: "https://api.github.com/users/froi/followers",
      following_url: "https://api.github.com/users/froi/following{/other_user}",
      gists_url: "https://api.github.com/users/froi/gists{/gist_id}",
      starred_url: "https://api.github.com/users/froi/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/froi/subscriptions",
      organizations_url: "https://api.github.com/users/froi/orgs",
      repos_url: "https://api.github.com/users/froi/repos",
      events_url: "https://api.github.com/users/froi/events{/privacy}",
      received_events_url: "https://api.github.com/users/froi/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 821679480,
        node_id: "MDU6TGFiZWw4MjE2Nzk0ODA=",
        url: "https://api.github.com/repos/GSA/code-gov-api/labels/[effort]%20small",
        name: "[effort] small",
        color: "d15e65",
        default: false
      },
      {
        id: 821687064,
        node_id: "MDU6TGFiZWw4MjE2ODcwNjQ=",
        url: "https://api.github.com/repos/GSA/code-gov-api/labels/[impact]%20government-open-source",
        name: "[impact] government-open-source",
        color: "5319e7",
        default: false
      },
      {
        id: 456323491,
        node_id: "MDU6TGFiZWw0NTYzMjM0OTE=",
        url: "https://api.github.com/repos/GSA/code-gov-api/labels/[issue-type]%20enhancement",
        name: "[issue-type] enhancement",
        color: "ee0701",
        default: false
      },
      {
        id: 821689902,
        node_id: "MDU6TGFiZWw4MjE2ODk5MDI=",
        url: "https://api.github.com/repos/GSA/code-gov-api/labels/[issue-type]%20good%20first%20issue",
        name: "[issue-type] good first issue",
        color: "ee0701",
        default: false
      },
      {
        id: 849222562,
        node_id: "MDU6TGFiZWw4NDkyMjI1NjI=",
        url: "https://api.github.com/repos/GSA/code-gov-api/labels/[priority]%20low",
        name: "[priority] low",
        color: "0055ff",
        default: false
      },
      {
        id: 821676839,
        node_id: "MDU6TGFiZWw4MjE2NzY4Mzk=",
        url: "https://api.github.com/repos/GSA/code-gov-api/labels/[skill-level]%20beginner",
        name: "[skill-level] beginner",
        color: "34bf11",
        default: false
      },
      {
        id: 456323492,
        node_id: "MDU6TGFiZWw0NTYzMjM0OTI=",
        url: "https://api.github.com/repos/GSA/code-gov-api/labels/help%20wanted",
        name: "help wanted",
        color: "128A0C",
        default: true
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "froi",
      id: 1918027,
      node_id: "MDQ6VXNlcjE5MTgwMjc=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1918027?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/froi",
      html_url: "https://github.com/froi",
      followers_url: "https://api.github.com/users/froi/followers",
      following_url: "https://api.github.com/users/froi/following{/other_user}",
      gists_url: "https://api.github.com/users/froi/gists{/gist_id}",
      starred_url: "https://api.github.com/users/froi/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/froi/subscriptions",
      organizations_url: "https://api.github.com/users/froi/orgs",
      repos_url: "https://api.github.com/users/froi/repos",
      events_url: "https://api.github.com/users/froi/events{/privacy}",
      received_events_url: "https://api.github.com/users/froi/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "froi",
        id: 1918027,
        node_id: "MDQ6VXNlcjE5MTgwMjc=",
        avatar_url: "https://avatars0.githubusercontent.com/u/1918027?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/froi",
        html_url: "https://github.com/froi",
        followers_url: "https://api.github.com/users/froi/followers",
        following_url: "https://api.github.com/users/froi/following{/other_user}",
        gists_url: "https://api.github.com/users/froi/gists{/gist_id}",
        starred_url: "https://api.github.com/users/froi/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/froi/subscriptions",
        organizations_url: "https://api.github.com/users/froi/orgs",
        repos_url: "https://api.github.com/users/froi/repos",
        events_url: "https://api.github.com/users/froi/events{/privacy}",
        received_events_url: "https://api.github.com/users/froi/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 0,
    created_at: "2018-08-06T22:17:05Z",
    updated_at: "2018-08-06T22:17:05Z",
    closed_at: null,
    author_association: "MEMBER",
    body: "**Is your feature request related to a problem? Please describe.**\r\nReplace [Bunyan](https://github.com/trentm/node-bunyan/) for another logger package. Bunyan seems to be a dead project, see the following [conversation](https://github.com/trentm/node-bunyan/issues/586).\r\n\r\n**Describe the solution you'd like**\r\nit's probably safe to change this package for [Winston](https://github.com/winstonjs/winston) logger package.\r\n\r\n**Describe alternatives you've considered**\r\nI've gone over some of the other options on NPM and Winston is probably the best option. It has a very active community and is actively maintained.\r\n"
  }
];

const getRepoDataResponse = {
  id: 70166875,
  node_id: "MDEwOlJlcG9zaXRvcnk3MDE2Njg3NQ==",
  name: "code-gov-api",
  full_name: "GSA/code-gov-api",
  owner: {
    login: "GSA",
    id: 643070,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjY0MzA3MA==",
    avatar_url: "https://avatars3.githubusercontent.com/u/643070?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/GSA",
    html_url: "https://github.com/GSA",
    followers_url: "https://api.github.com/users/GSA/followers",
    following_url: "https://api.github.com/users/GSA/following{/other_user}",
    gists_url: "https://api.github.com/users/GSA/gists{/gist_id}",
    starred_url: "https://api.github.com/users/GSA/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/GSA/subscriptions",
    organizations_url: "https://api.github.com/users/GSA/orgs",
    repos_url: "https://api.github.com/users/GSA/repos",
    events_url: "https://api.github.com/users/GSA/events{/privacy}",
    received_events_url: "https://api.github.com/users/GSA/received_events",
    type: "Organization",
    site_admin: false
  },
  private: false,
  html_url: "https://github.com/GSA/code-gov-api",
  description: "API powering the code.gov source code harvester",
  fork: false,
  url: "https://api.github.com/repos/GSA/code-gov-api",
  forks_url: "https://api.github.com/repos/GSA/code-gov-api/forks",
  keys_url: "https://api.github.com/repos/GSA/code-gov-api/keys{/key_id}",
  collaborators_url: "https://api.github.com/repos/GSA/code-gov-api/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/GSA/code-gov-api/teams",
  hooks_url: "https://api.github.com/repos/GSA/code-gov-api/hooks",
  issue_events_url: "https://api.github.com/repos/GSA/code-gov-api/issues/events{/number}",
  events_url: "https://api.github.com/repos/GSA/code-gov-api/events",
  assignees_url: "https://api.github.com/repos/GSA/code-gov-api/assignees{/user}",
  branches_url: "https://api.github.com/repos/GSA/code-gov-api/branches{/branch}",
  tags_url: "https://api.github.com/repos/GSA/code-gov-api/tags",
  blobs_url: "https://api.github.com/repos/GSA/code-gov-api/git/blobs{/sha}",
  git_tags_url: "https://api.github.com/repos/GSA/code-gov-api/git/tags{/sha}",
  git_refs_url: "https://api.github.com/repos/GSA/code-gov-api/git/refs{/sha}",
  trees_url: "https://api.github.com/repos/GSA/code-gov-api/git/trees{/sha}",
  statuses_url: "https://api.github.com/repos/GSA/code-gov-api/statuses/{sha}",
  languages_url: "https://api.github.com/repos/GSA/code-gov-api/languages",
  stargazers_url: "https://api.github.com/repos/GSA/code-gov-api/stargazers",
  contributors_url: "https://api.github.com/repos/GSA/code-gov-api/contributors",
  subscribers_url: "https://api.github.com/repos/GSA/code-gov-api/subscribers",
  subscription_url: "https://api.github.com/repos/GSA/code-gov-api/subscription",
  commits_url: "https://api.github.com/repos/GSA/code-gov-api/commits{/sha}",
  git_commits_url: "https://api.github.com/repos/GSA/code-gov-api/git/commits{/sha}",
  comments_url: "https://api.github.com/repos/GSA/code-gov-api/comments{/number}",
  issue_comment_url: "https://api.github.com/repos/GSA/code-gov-api/issues/comments{/number}",
  contents_url: "https://api.github.com/repos/GSA/code-gov-api/contents/{+path}",
  compare_url: "https://api.github.com/repos/GSA/code-gov-api/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/GSA/code-gov-api/merges",
  archive_url: "https://api.github.com/repos/GSA/code-gov-api/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/GSA/code-gov-api/downloads",
  issues_url: "https://api.github.com/repos/GSA/code-gov-api/issues{/number}",
  pulls_url: "https://api.github.com/repos/GSA/code-gov-api/pulls{/number}",
  milestones_url: "https://api.github.com/repos/GSA/code-gov-api/milestones{/number}",
  notifications_url: "https://api.github.com/repos/GSA/code-gov-api/notifications{?since,all,participating}",
  labels_url: "https://api.github.com/repos/GSA/code-gov-api/labels{/name}",
  releases_url: "https://api.github.com/repos/GSA/code-gov-api/releases{/id}",
  deployments_url: "https://api.github.com/repos/GSA/code-gov-api/deployments",
  created_at: "2016-10-06T15:25:24Z",
  updated_at: "2018-08-27T20:19:35Z",
  pushed_at: "2018-08-30T13:38:39Z",
  git_url: "git://github.com/GSA/code-gov-api.git",
  ssh_url: "git@github.com:GSA/code-gov-api.git",
  clone_url: "https://github.com/GSA/code-gov-api.git",
  svn_url: "https://github.com/GSA/code-gov-api",
  homepage: "http://code.gov",
  size: 4437,
  stargazers_count: 29,
  watchers_count: 29,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 18,
  mirror_url: null,
  archived: false,
  open_issues_count: 22,
  license: {
    key: "other",
    name: "Other",
    spdx_id: null,
    url: null,
    node_id: "MDc6TGljZW5zZTA="
  },
  forks: 18,
  open_issues: 22,
  watchers: 29,
  default_branch: "master",
  organization: {
    login: "GSA",
    id: 643070,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjY0MzA3MA==",
    avatar_url: "https://avatars3.githubusercontent.com/u/643070?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/GSA",
    html_url: "https://github.com/GSA",
    followers_url: "https://api.github.com/users/GSA/followers",
    following_url: "https://api.github.com/users/GSA/following{/other_user}",
    gists_url: "https://api.github.com/users/GSA/gists{/gist_id}",
    starred_url: "https://api.github.com/users/GSA/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/GSA/subscriptions",
    organizations_url: "https://api.github.com/users/GSA/orgs",
    repos_url: "https://api.github.com/users/GSA/repos",
    events_url: "https://api.github.com/users/GSA/events{/privacy}",
    received_events_url: "https://api.github.com/users/GSA/received_events",
    type: "Organization",
    site_admin: false
  },
  network_count: 18,
  subscribers_count: 14
};

module.exports = {
  rateLimitResponse,
  getReadmeResponse,
  getRepoLanguagesResponse,
  getRepoContributorsResponse,
  getUsersResponse,
  getRepoIssuesResponse,
  getRepoDataResponse
};
