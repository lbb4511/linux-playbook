window.$docsify = {
  name: "Linux学习与运用",
  logo: '_img/logo.svg',
  repo: "lbb4511/linux-playbook",
  maxLevel: 3,
  subMaxLevel: 2,
  coverpage: "README.md",
  onlyCover: true,
  loadSidebar: "SUMMARY.md",
  search: {
    maxAge: 86400000,
    paths: [
      '/application/',
      '/command/',
      '/file/',
      '/operation-and-maintenance/',
      '/software/'
    ],
    placeholder: '搜索',
    noData: '找不到结果',
    depth: 2
  },
};
