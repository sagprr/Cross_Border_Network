import './Filter.css';

const Filter = () => {
	return (
		<div className="filter">
			<h1>Filter Products </h1>
			<input
				type="text"
				placeholder="enter Name"
			/>
			<div className="filterTags">
				<legend>Tags</legend>
				<input
					type="text"
					placeholder="enter Tags"
				/>
			</div>
			<div className="filterLocations">
				<legend>Location</legend>
				<input
					type="text"
					placeholder="enter Location"
				/>
			</div>
			<div className="filterCategories">
				<legend>Categories</legend>
				<select value="category" onChange={()=>{}}>
					<option value="All">All</option>
					<option value="Category 1">Category A</option>
					<option value="Category 2">Category B</option>
					<option value="Category 3">Category C</option>
				</select>
			</div>

			<div className="filterRadio">
				<label htmlFor="text-filter">
					<input
						type="radio"
						id="text-filter"
						name="filter-type"
						value="text"
						onChange={()=>{}}
					/>
					Available
				</label>
				<label htmlFor="category-filter">
					<input
						type="radio"
						id="category-filter"
						name="filter-type"
						value="category"
						onChange={()=>{}}
					/>
					Outdated
				</label>
			</div>

			<div className="filterButtons">
				<button>Clear </button>
				<button>Execute</button>
			</div>
		</div>
	)
}

export default Filter