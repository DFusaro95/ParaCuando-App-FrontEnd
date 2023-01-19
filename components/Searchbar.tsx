const Searchbar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
        className="border border-GRAY rounded-full h-12 pl-8 min-w-full"
      />
      <div>
        <input
          type="text"
          placeholder="Marcas y tiendas"
          className="border border-GRAY rounded-full h-12 text-center"
        />
      </div>

      <div className="w-40 h-12">
        <button className="bg-BLUE text-white min-w-full min-h-full rounded-full">
          Siguiente
        </button>
      </div>

      <div className="w-40 h-12">
        <button className="bg-GRAY text-white min-w-full min-h-full rounded-full">
          Siguiente
        </button>
      </div>

      <div>
        <img src="/atom-icon-like-off.svg" alt="" />
      </div>

      <div>
        <img src="atom-icon-like-on.svg" alt="" />
      </div>
    </div>
  );
};

export default Searchbar;
