

const Clients = () => {
  return (
    <section className="mt-10 z-10 px-10" >
      <div className="grid max-sm:grid-cols-2 sm:grid-cols-4 w-full justify-around items-center">
        <div className="w-40 h-fit">
          <img
            src="/prologis.png"
            alt="company_name"
            className="h-30 "
          />
        </div>
        <div className="w-40 h-fit">
          <img
            src="/realty.png"
            alt="company_name"
            className="h-30 "
          />
        </div>
        <div className="w-40 h-fit">
          <img
            src="/tower.png"
            alt="company_name"
            className="h-30 "
          />
        </div>
        <div className="w-40 h-fit">
          <img
            src="/equinix.png"
            alt="company_name"
            className="h-30 "
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
