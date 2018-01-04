var name;
var description;

module.exports = () => {

	const functions = {
		setName: (nameIn) => {
			this.name = nameIn;
		},
		setDescription: (descriptionIn) => {
			this.description = descriptionIn;
		},
		getInfo: () => ({name: this.name, description: this.description})
	};

	return functions;
}