import { InputMetaData } from '../types';
import { create as ipfsHttpClient, Options } from 'ipfs-http-client';
import { useState, useEffect } from 'react';
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0' as Options);

type SelectionOptions = 'Upload Image' | 'Enter Image Url' | 'Enter IPFS Hash' | '';

function ImageComponent(props: InputMetaData) {
	const [ selectOption, setSelectOption ] = useState<SelectionOptions>('Upload Image');
	const [ ipfsHash, setIpfsHash ] = useState('');
	useEffect(
		() => {
			console.log(selectOption);
		},
		[ selectOption ]
	);
	useEffect(
		() => {
			console.log(ipfsHash);
		},
		[ ipfsHash ]
	);

	const uploadToIPFS = async (file: FileList | null) => {
		if (!!file) {
			try {
				const added = await client.add(file[0], {
					progress: (prog) => console.log(`received: ${prog}`)
				});
				ipfsHandler(added.path);
				const url = `https://ipfs.infura.io/ipfs/${added.path}`;
				console.log(url);
			} catch (e) {
				console.log(e);
			}
		}
	};

	const renderImageOptions = () => {
		switch (selectOption) {
			case 'Upload Image':
				return (
					<div className=" flex flex-col items-center">
						<label htmlFor="uploadImage">Upload Image</label>
						<input type="file" onChange={(e) => uploadToIPFS(e.target.files)} />
					</div>
				);
			case 'Enter Image Url':
				return (
					<div className=" flex flex-col items-center">
						<label htmlFor="image_url">Enter Image Url</label>
						<input
							type="text"
							className="text-black"
							onChange={(e) =>
								props.setMetaData((prevMetadata) => ({ ...prevMetadata, image: e.target.value }))}
							value={props.metaData.image || ''}
							name="image_url"
							id="image_url"
						/>
					</div>
				);
			case 'Enter IPFS Hash':
				return (
					<div className=" flex flex-col items-center">
						<label htmlFor="ipfs_hash">Enter IPFS Hash</label>
						<input
							type="text"
							name="ipfs_hash"
							className="text-black"
							onChange={(e) => ipfsHandler(e.target.value)}
							value={ipfsHash || ''}
							id="ipfs_hash"
						/>
					</div>
				);
		}
	};
	const changeMethod = (option: SelectionOptions) => {
		setSelectOption(option);
		props.setMetaData((prevMetadata) => ({ ...prevMetadata, image: '' }));
		setIpfsHash('');
	};
	const ipfsHandler = (hash: string) => {
		setIpfsHash(hash);
		props.setMetaData((prevMetadata) => ({ ...prevMetadata, image: `ipfs://${hash}` }));
	};
	return (
		<div className=" flex flex-col items-center">
			<span>Image</span>
			<div className="text-black">
				<div className="">
					<select
						onChange={(e) => changeMethod(e.target.value as SelectionOptions)}
						defaultValue={'Upload Image'}
					>
						<option value="Upload Image">Upload Image</option>
						<option value="Enter Image Url">Enter Image Url</option>
						<option value="Enter IPFS Hash">Enter IPFS Hash</option>
					</select>
				</div>
			</div>
			{renderImageOptions()}
		</div>
	);
}

export default ImageComponent;
