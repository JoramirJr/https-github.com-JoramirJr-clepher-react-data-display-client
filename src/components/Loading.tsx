function LoadingLine() {
  return (
    <div className="relative w-full h-1 bg-gray-200 overflow-hidden">
      <div className="absolute w-full h-full bg-blue-500 loading-animation"></div>
    </div>
  );
}

export default LoadingLine;
