import { getMealById } from "./api";

const commentWindow = async () => {
  const theMeal = await getMealById();
  console.log(theMeal);
};

export default commentWindow;
  