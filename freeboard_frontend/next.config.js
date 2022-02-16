module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "sookheewoof",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};
