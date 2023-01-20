const Searchbar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder={`¿Qué quieres ver en tu ciudad? 🔍`}
        className="border border-GRAY rounded-full h-12 pl-8 min-w-full content-around"
      />
      <img src="/bg-planetb.svg" alt="" />
    </div>
  );
};

export default Searchbar;
