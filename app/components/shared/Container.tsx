const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-10/12 max-w-5xl mx-auto md:px-8 py-4">{children}</div>
  );
};
export default Container;
