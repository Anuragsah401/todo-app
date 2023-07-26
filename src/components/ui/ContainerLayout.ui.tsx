const ContainerLayout = ({ children, title }: any) => {
  return (
    <div className="w-[25em] h-[20em] rounded-md border-2 border-black overflow-hidden">
      <h3 className="text-center bg-slate-600 text-white py-2">{title}</h3>
      {children}
    </div>
  );
};

export default ContainerLayout;
