import Product from "./Product";

export default function Description() {
  return (
    <div className="px-10 mt-2">
      <div className="flex items-center my-3">
        <div className="block">
          <span>Items</span>
          <span className="font-semibold ml-2">3</span>&nbsp;&nbsp;·&nbsp;
          <span>Created</span>
          <span className="font-semibold ml-2">Jun 2023</span>
          &nbsp;&nbsp;·&nbsp;
          <span>Creator earnings</span>
          <span className="font-semibold ml-2">70%</span>&nbsp;&nbsp;·&nbsp;
          <span>Chain </span>
          <span className="font-semibold ml-2">Etherum</span>&nbsp;&nbsp;·&nbsp;
          <span className="font-semibold ml-2">Music</span>
        </div>
      </div>
      <div className="flex items-center my-3">
        <div className="block">
          <span>Music NFT, homonym and Charity</span>
        </div>
      </div>
      <div className="flex items-center my-3">
        <div className="block">
          <span>
            <p>
              Đen Please let everyone know the sales of the song{" "}
              {`"Nấu cho em ăn" `}one month after release.
            </p>
            <br /> On behalf of the audience, this revenue will be sent to{" "}
            {`"Nuôi em"`}
            <br /> a unit of Trung tâm tình nguyện Quốc gia - TW Đoàn Thanh Niên
            Việt Nam, to feed and build schools for children in remote areas.
          </span>
        </div>
      </div>
      <div className="h-px border-2 my-6"></div>
      <div>
        <Product />
      </div>
    </div>
  );
}
