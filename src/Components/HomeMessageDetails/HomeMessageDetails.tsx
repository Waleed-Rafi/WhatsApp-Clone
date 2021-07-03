import React from "react";

interface Props {
  containerStyles?: React.CSSProperties;
  messageLeftStyles?: React.CSSProperties;
  messageRightStyles?: React.CSSProperties;
}

const HomeMessageDetails: React.FC<Props> = ({
  containerStyles = {},
  messageLeftStyles = {},
  messageRightStyles = {},
}) => {
  return (
    <div
      className="home-message-detail-container"
      style={{ ...containerStyles }}
    >
      <div
        className="home-message-detail-left"
        style={{ ...messageLeftStyles }}
      >
        Hello
      </div>
      <div
        className="home-message-detail-right"
        style={{ ...messageRightStyles }}
      >
        Hi
      </div>
      <div
        className="home-message-detail-left"
        style={{ ...messageLeftStyles }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        repudiandae enim recusandae tenetur reprehenderit numquam, debitis unde
        consectetur quia, est fugit sit veritatis. Molestias fugiat quidem
        delectus esse maxime aspernatur magni recusandae officia rerum? Iure
        adipisci dolorum minima officia inventore, asperiores labore incidunt.
        Optio nesciunt, eaque eligendi fugit itaque eum.
      </div>
      <div
        className="home-message-detail-right"
        style={{ ...messageRightStyles }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus beatae
        minima veritatis saepe facere officia, voluptatem eveniet natus
        perspiciatis ducimus quidem ad fugit dicta eos laudantium hic porro vero
        aliquid?
      </div>
      <div
        className="home-message-detail-left"
        style={{ ...messageRightStyles }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis?
      </div>
      <div
        className="home-message-detail-right"
        style={{ ...messageRightStyles }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est itaque nam
        quis dicta vitae similique maiores repellat at nemo perspiciatis!
      </div>
      <div
        className="home-message-detail-left"
        style={{ ...messageRightStyles }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis?
      </div>
      <div
        className="home-message-detail-right"
        style={{ ...messageRightStyles }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est itaque nam
        quis dicta vitae similique maiores repellat at nemo perspiciatis!
      </div>
    </div>
  );
};

export default HomeMessageDetails;
