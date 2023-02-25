import React from 'react'
import {
    MdAddPhotoAlternate,
    MdCheckCircleOutline,
    MdSpeakerNotes,
    MdTextFields,
    MdTitle,
} from 'react-icons/md'

MdCheckCircleOutline
const data = [
    {
        id: 1,
        description: <MdTextFields /> + 'Describe shortly your story',
        title: <MdTitle /> + 'Tittle',
        post: <MdSpeakerNotes /> + 'Share your story here',
        img: <MdAddPhotoAlternate /> + 'Thumdnail',
        tags: 'use tags to make easier find your story, separete them with commas.',

        button: 'Ready!' + <MdCheckCircleOutline />,
    },
]

export default data
