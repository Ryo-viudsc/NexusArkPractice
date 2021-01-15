import styled, {css} from 'styled-components';


<div className="collection-preview" >
<h1 className="title">{title.toUpperCase()}</h1>
<div className="preview">
    {items
       .filter((item,idx) => idx < 4)
       .map((item) => (
         <CollectionItem key={item.id} item={item}   />
     ))}
</div>
</div>



export const CollectionPreviewContainer = styled.div`

`;


export const TitleContainer = styled.h1`

`;


export const PreviewContainer = styled.div`



`