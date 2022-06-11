import { Dispatch, FC, SetStateAction } from 'react';
import { IMetadata, InputMetaData } from '../types';
import ImageComponent from './ImageComponent';

const FormComponent = (props: InputMetaData) => {
	return (
		<div>
			<h2 className="text-center text-white">Fill up here 👇</h2>
			<form className="flex mt-2 flex-col text-white items-center">
				<label htmlFor="name">Name</label>
				<input
					onChange={(e) => props.setMetaData((prevState) => ({ ...prevState, name: e.target.value }))}
					type="text"
					className="text-black"
					name="name"
					id="name"
					value={props.metaData.name || ''}
				/>
				<label htmlFor="external_url">External Url</label>
				<input
					onChange={(e) => props.setMetaData((prevState) => ({ ...prevState, external_url: e.target.value }))}
					className="text-black"
					value={props.metaData.external_url || ''}
					type="text"
					name="external_url"
					id="external_url"
				/>
				<label htmlFor="background_color">Background Color(HEX):</label>
				<input
					onChange={(e) =>
						props.setMetaData((prevState) => ({ ...prevState, background_color: e.target.value }))}
					className="text-black"
					value={props.metaData.background_color || ''}
					type="text"
					name="background_color"
					id="background_color"
					placeholder={'#'}
				/>
				<br />
				<ImageComponent metaData={props.metaData} setMetaData={props.setMetaData} /> 
			</form>
		</div>
	);
};

export default FormComponent;
