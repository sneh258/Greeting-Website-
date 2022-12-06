import react from 'react';

function App()
{

    let currdate= new Date();
    currdate=currdate.getHours();
    let greet="";
    const csssytle={};

    if(currdate>=1 && currdate<12)
    {
        greet="Good Morning";
        csssytle.color='orange';
    }
    else if(currdate>=12 && currdate<16)
    {
        greet="Good Noon";
        csssytle.color='red';
    }
    else
    {
        greet="Good Night";
        csssytle.color='black';
    }

    return(

        <>
        <div id='sneha'>
            <h1>
                Hello Ma'am, <span style={csssytle}>{greet}</span>
            </h1>
        </div>


        </>
    )

}

export default App;