const renderNotes = function(notes, filters) {
	const filteredNoted = notes.filter(function(note) {
		return note.title.toLowerCase().includes(filters.filterText.toLowerCase());
	});

	filteredNoted.forEach(note => {
		const noteEl = document.createElement('div');
		const txt = document.createElement('span');

		if (note.title.length > 0) {
			txt.textContent = note.title;
		} else {
			txt.textContent = 'Unnamed Note';
		}

		//create note DOM object
		const editButton = document.createElement('button');
		editButton.textContent = 'edit';
		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'x';

		noteEl.appendChild(txt);
		noteEl.appendChild(editButton);
		noteEl.appendChild(deleteButton);

		document.querySelector('#notes').appendChild(noteEl);
	});
};
