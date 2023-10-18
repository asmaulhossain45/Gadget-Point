const MyCart = () => {
    const submit = event => {
        event.preventDefault();
        const select = event.target.select.value;
        console.log(select);
    }
  return (
    <div>
      <form onSubmit={submit}>
        <select name="select" className="w-full">
          <option>Home</option>
          <option>H</option>
          <option>Home</option>
          <option>Home</option>
        </select>
        <input className="text-center text-white" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyCart;
