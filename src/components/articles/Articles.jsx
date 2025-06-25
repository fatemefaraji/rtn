import art from "../../../src/assets/images/1715604853550.png";

function Articles() {
  return (
    <div className="bg-slate-200 w-52 h-64 py-4 px-4 border-sky-300 font-semibold my-10 mx-5 hover:cursor-pointer hover:bg-slate-300 text-center transition shadow">
      <img src={art} alt="Article Illustration" className="w-full h-5/6 hover:border-fuchsia-500" />
      <h3 className="text-left p-2 font-bold">Variables</h3>
      <p className="text-left">This is dummy text</p>
    </div>
  );
}

export default Articles;