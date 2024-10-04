import "server-only";
// due to this libaray this code not able to add any client component

export const serverSideFunction = () => {
  console.log(`
    libarary usage,
    environment variable, 
    databases,
    confidential details
    `);
  return "Result";
};
