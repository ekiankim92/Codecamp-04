module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "sookheewoof",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};
