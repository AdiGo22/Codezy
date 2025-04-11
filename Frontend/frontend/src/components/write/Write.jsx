
import React,{useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../constants/constants';

export default function Write() {
    const[content , setContent] = useState('Start writing here...');
    const navigate = useNavigate();
    const publishHandler = () => {
        console.log("published");
    };
    const saveHandler = () => {
        console.log("saved");
    };
    const homeHandler = () => {
        navigate(`${HOME}`)
    }
  return (
    <>
    <Editor
      apiKey='jy5esv9sblvoinvsltighorjnhcwccm01cqc4kmzzjtwquv7'
      value =  {content}
      onEditorChange={(newContent)=> setContent(newContent)}

      init={{
        plugins: [
         
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      }}
      //initialValue="Write from here!"
    />
    <button onClick={publishHandler}>Publish</button>
    <button onClick={saveHandler}>Save Changes</button>
    <button onClick = {homeHandler}>Home</button>
    </>
  );
}

