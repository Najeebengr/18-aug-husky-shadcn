const products = [
    { title: 'A', isFruit: false, id: 1 },
    { title: 'B', isFruit: false, id: 2 },
    { title: 'C', isFruit: true, id: 3 },
  ];
  
  export default function RenderingList() {
    return <div className="p-5">
        {/* <pre>{JSON.stringify(products)}</pre> */}
        <ul  className="list-disc">
            {
                products.map((item,index)=>{
                    return  <li key={item.id} style={{color: item.isFruit ? 'green' : 'orange'}}>  {item.title} </li>
                }
            )
            }
        </ul>
    </div>
  }
  