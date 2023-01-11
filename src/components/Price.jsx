function Price() {
  return (
    <div className="flex items-center justify-between mb-5 md:block md:mb-8">
      <div className="flex items-center gap-3">
        <span className="font-bold text-2xl md:text-3xl">$125.00</span>
        <span className="text-primary bg-primary-pale font-bold py-[1px] px-2 text-sm rounded-md md:text-base">
          50%
        </span>
      </div>
      <span className="font-bold text-sm text-neutral-light-grayish line-through">
        $250.00
      </span>
    </div>
  );
}

export default Price;
