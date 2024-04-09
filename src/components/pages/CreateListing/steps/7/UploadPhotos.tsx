import { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { CameraPlus, Images } from '@phosphor-icons/react'
import useFormContext from '../../../../../hooks/useFormContext'

const thumbsContainer: React.CSSProperties = {
  width: '640px',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '40px',
}

const thumb: React.CSSProperties = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  padding: 4,
  boxSizing: 'border-box',
  overflow: 'hidden',
}

const thumbInner: React.CSSProperties = {
  width: '100%',
}

const img: React.CSSProperties = {
  display: 'block',
  width: '100%',
}

const UploadPhotos = () => {
  const { updateFormData, formData } = useFormContext()
  const [files, setFiles] = useState<{ preview: string }[]>([])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      const updatedFiles = acceptedFiles.map((file) => ({
        ...file,
        preview: URL.createObjectURL(file),
      }))

      setFiles((prevFiles) => [...prevFiles, ...updatedFiles])

      updateFormData(
        'photos',
        files.map((file) => file.preview)
      )

      console.log(formData?.photos)
    },
  })

  const thumbs = files.map((file, index) => (
    <div
      style={thumb}
      key={index}
      className={`${
        index === 0
          ? 'col-span-2 max-h-[640px] w-full relative overflow-hidden'
          : null
      }`}
    >
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
        />
      </div>
      {index === 0 ? (
        <span className="block absolute top-4 left-4 bg-neutral-75 p-2">
          Cover Photo
        </span>
      ) : null}
    </div>
  ))

  const renderDivs = (numberOfDivs: number) => {
    const divArray = []
    for (let i = 0; i < numberOfDivs; i++) {
      divArray.push(
        <div
          className="border-2 border-dashed border-neutral-200 hover:border-neutral-500 rounded-xl h-[210px] w-[310px] flex flex-col items-center justify-center gap-2 cursor-pointer"
          {...getRootProps()}
          key={i}
        >
          <CameraPlus size={32} />
        </div>
      )
    }
    return divArray
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [])

  return (
    <div>
      <div className="flex flex-col gap-10">
        <div>
          <h5 className="font-semibold mb-2">Choose at least 5 photos</h5>
          <p className="text-neutral-500">Upload photos of your property</p>
        </div>
        {files.length === 0 ? (
          <div
            {...getRootProps()}
            className={`rounded-xl border-dashed border-2 w-[640px] h-[456px] flex flex-col items-center justify-center border-neutral-500 text-center ${
              isDragActive ? 'border-secondary-300' : 'border-neutral-500'
            } `}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="flex flex-col gap-4 items-center">
                <Images size={60} />
                <p>
                  Drag 'n' drop some files here, or click to{' '}
                  <span className="underline cursor-pointer">select files</span>
                </p>
              </div>
            )}
          </div>
        ) : null}

        <aside {...getRootProps()} style={thumbsContainer}>
          {thumbs}
          {files.length === 1
            ? renderDivs(4)
            : files.length === 2
            ? renderDivs(3)
            : files.length === 3
            ? renderDivs(2)
            : files.length === 4
            ? renderDivs(1)
            : files.length >= 5
            ? renderDivs(1)
            : null}
        </aside>
      </div>
    </div>
  )
}

export default UploadPhotos
