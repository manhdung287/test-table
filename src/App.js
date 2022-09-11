import logo from './logo.svg';
import './App.css';
import { Treebeard } from 'react-treebeard';
import { useEffect, useState } from 'react';
import { getFileCsvContent } from './APIs';
import Cell from './Cell';
import useWindowDimensions from './useWindowDemison';
import stringWidth from 'string-width';


function App() {
    const [data, setData] = useState([]);
    const [cursor, setCursor] = useState(false);
    const { width } = useWindowDimensions()
    useEffect(() => {
        const loadData = async () => {
            const { data } = await getFileCsvContent('2810');
            if (data) {
                setData(data?.data)
            }
        };
        loadData()
    }, []);
    console.log(data)
    return (
        <div  >
            {data.map((item, index) => {
                let _dataLarger = item.filter(x => x.length > 7);
                let _newData = _dataLarger.map((item) => {
                    return {
                        numline: Math.ceil(stringWidth(item) / 12),
                        content: item
                    }
                });
                _newData.sort((a, b) => a.numline - b.numline);
                let _numline = _newData.length > 0 ? _newData[_newData.length - 1].numline : 1;
                let heightPerLine = (
                  _newData.length > 0
                  && _newData[_newData.length - 1].content.length != stringWidth(_newData[_newData.length - 1].content))
                  ? 18
                  : 15;
                let height =  _numline === 1 ? 30 : _numline * heightPerLine
                return (<div key={index} className='grid-parent'>
                    {item.map((itemChild, indexC) => {
                        return (<Cell data={itemChild} key={indexC} width={Math.round(width / item?.length)} height={height} />)
                    }

                    )}
                </div>)
            }

            )}
        </div>
    )
}

export default App;
