const FormComponent = () => {
	return (
		<div>
			<h2 className="text-center text-white">Fill up here 👇</h2>
			<form>
				<label htmlFor="name">Name</label>
				<br />
				<input type="text" name="name" id="name" />
				<br />
				<label htmlFor="external_url">External Url</label>
				<br />
				<input type="text" name="external_url" id="external_url" />
				<br />
				<label htmlFor="background_color">Background Color:</label>
				<br />
				<input
					onChange={(e) => console.log(e.target.value)}
					type="color"
					id="background_color"
					name="background_color"
					value="#ff0000"
				/>
				<br />
			</form>
		</div>
	);
};

export default FormComponent;
