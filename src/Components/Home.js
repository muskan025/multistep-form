import { useState, lazy, Suspense, useTransition } from "react";
import { lazyLoad } from "../lazyLoad.js";
 

const AdminData=lazyLoad("./Components/AdminData","AdminData")
// const AdminData = lazy(() =>
//   import("./AdminData").then((module) => {
//     return { default: module.AdminData };
//   })
// ); //used to load data only when it's called and not load evrything on first render

const Home = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const [isPending, startTransition] = useTransition(); //used to render data  ONLY AFTER  everything of that page is loaded
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          import("./sum.js").then((module) => {
            alert(module.sum(2, 2)); //if it's default export then use module.default.sum
          });
        }}
      >
        Add sum 2+2
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          startTransition(() => {
            setIsAdmin(!isAdmin);
          });
        }}
      >
        Toggle
      </button>
      {isPending && "Loading..."}
      <Suspense fallback={<h1>Loading...</h1>}>
        <span>{isAdmin ? <AdminData /> : <h1>Not Admin</h1>}</span>
      </Suspense>
    </div>
  );
};

export default Home;
