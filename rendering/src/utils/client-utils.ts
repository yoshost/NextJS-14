import "client-only";
// due to this libaray this code not able to add any server component

export const clientSideFunction = () => {
  console.log(`
    local Storage
    window object
    `);
  return "Client Result";
};
