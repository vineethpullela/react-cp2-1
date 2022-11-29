const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
  //<Button main-heading="Social Buttons" like = "Like" comment ="Comment" save = "Save"/>
};

const element = (
  //  Write your code here.

  <div className="bg-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="button-Container">
      <Button className="like-Button" buttonText="Like" />
      <Button className="comment-Button" buttonText="Comment" />
      <Button className="save-Button" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
