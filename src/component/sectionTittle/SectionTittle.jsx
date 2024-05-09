const SectionTittle = ({subTittle, tittle}) => {
    return (
        <div className="mx-auto md:w-4/12 pb-16 text-center mt-20">
            <p className="text-[#D99904] mb-4">-----{subTittle}-----</p>
            <h1 className="text-4xl uppercase border-y-4 py-4">{tittle}</h1>
        </div>
    );
};

export default SectionTittle;