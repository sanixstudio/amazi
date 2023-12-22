const Loader = ({ color }: { color: string }) => {
  return (
    <div className="flex justify-center items-center transition ease-in">
      <div className="w-56 h-56">
        <style>
          {`
          @keyframes ldio-yrmauo608k {
            12.5% { background: ${color} }
          }

          .ldio-yrmauo608k div {
            position: absolute;
            width: 53.04px;
            height: 53.04px;
            animation: ldio-yrmauo608k 0.9900990099009901s linear infinite;
          }

          .loadingio-spinner-blocks-8gnj0b64cg9 {
            width: 221px;
            height: 221px;
            display: inline-block;
            overflow: hidden;
            background: #transparent;
          }

          .ldio-yrmauo608k {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(1);
            backface-visibility: hidden;
            transform-origin: 0 0;
          }

          .ldio-yrmauo608k div {
            box-sizing: content-box;
          }
        `}
        </style>
        <div className="loadingio-spinner-blocks-8gnj0b64cg9">
          <div className="ldio-yrmauo608k">
            <div
              style={{ left: "24.31px", top: "24.31px", animationDelay: "0s" }}
            ></div>
            <div
              style={{
                left: "83.98px",
                top: "24.31px",
                animationDelay: "0.12376237623762376s",
              }}
            ></div>
            <div
              style={{
                left: "143.65px",
                top: "24.31px",
                animationDelay: "0.24752475247524752s",
              }}
            ></div>
            <div
              style={{
                left: "24.31px",
                top: "83.98px",
                animationDelay: "0.8663366336633663s",
              }}
            ></div>
            <div
              style={{
                left: "143.65px",
                top: "83.98px",
                animationDelay: "0.3712871287128713s",
              }}
            ></div>
            <div
              style={{
                left: "24.31px",
                top: "143.65px",
                animationDelay: "0.7425742574257426s",
              }}
            ></div>
            <div
              style={{
                left: "83.98px",
                top: "143.65px",
                animationDelay: "0.6188118811881188s",
              }}
            ></div>
            <div
              style={{
                left: "143.65px",
                top: "143.65px",
                animationDelay: "0.49504950495049505s",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
