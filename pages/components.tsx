import Bubblemap from '@/components/Bubblemap';
import Likebutton from '@/components/Likebutton';
import Nextbutton from '@/components/Nextbutton';
import Searchbar from '@/components/Searchbar';

const components = () => {
  return (
    <div>
      <Likebutton />
      <Nextbutton />
      <Bubblemap />
      <Searchbar />
      {/* <input
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

      <div className="w-12 h-12">
        <img src="/like-disable.jpg" alt="" />
      </div>

      <div className="w-12 h-12">
        <img src="/like-enable.jpg" alt="" />
      </div>

      <Image width={200} height={200} src="/atom-icon-like-on.svg" alt="" /> */}
    </div>
  );
};

export default components;
