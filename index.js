console.log("index.js")
const data=[
    {
        name:'shivam',
        age:21,
        city:'kolkata',
        language:'python',
        framework:'django',
        image:'https://randomuser.me/api/portraits/men/51.jpg'

    },
    {
        name:'pk',
        age:31,
        city:'mumbai',
        language:'java',
        framework:'springboot',
        image:'https://randomuser.me/api/portraits/men/51.jpg'

    },
    {
        name:'sumi',
        age:61,
        city:'delhi',
        language:'c#',
        framework:'.net',
        image:'https://randomuser.me/api/portraits/women/51.jpg'

    },
    {
        name:'shivam datta',
        age:22,
        city:'new york',
        language:'javascript',
        framework:'react js',
        image:'https://randomuser.me/api/portraits/men/51.jpg'

    },
]
function cvIterator(profiles) {
    let nextIndex=0;
    return{
        next:function() {
            return nextIndex<profiles.length?
            {
                value:profiles[nextIndex++],done:false
            }:
            {done:true}
        }
    };
    
}
const candidates=cvIterator(data)
nextCV()
const next=document.getElementById('next')
next.addEventListener('click',nextCV)

function nextCV() {
    const currentCandidate=candidates.next().value
    let image=document.getElementById('image')
    let profile=document.getElementById('profile')
    if (currentCandidate!=undefined) {
        image.innerHTML=`<img src='${currentCandidate.image}'>`
    profile.innerHTML=`<ul class="list-group">
    
    <li class="list-group-item">Name:${currentCandidate.name}</li>
    <li class="list-group-item">Age:${currentCandidate.age}</li>
    <li class="list-group-item">City:${currentCandidate.city}</li>
    <li class="list-group-item">Language:${currentCandidate.language}</li>
    <li class="list-group-item">Framework:${currentCandidate.framework}</li>
  </ul>`
    }
    else{
        alert("End of applications")
        window.location.reload();
    }
}