import React from 'react';
import { Container} from 'mdbreact';
import FormSearch from './FormSearch';

class TableDes extends React.Component {
    render() {
        return (    
            <Container className="container-fluid">          
                    <div>
                    <strong><h3>Description</h3></strong>                    
                        <p align="justify">Makan siang merupakan salah satu kesempatan untuk memberikan asupan nutrisi dan kalori untuk anak, sehingga ia mampu melewati hari dengan lebih aktif, menyerap semua informasi dengan mudah, dan menjaga mood-nya agar stabil.</p><br/>
                        <p align="justify">Kids meal dari dietplus mengandung semua nutrisi yang dibutuhkan dalam tumbuh kembang anak, dimasak fresh setiap hari, dan diantar ke rumah atau kesekolah. Sehat, mudah dan pasti enak.</p><br/>
                        <p align="justify">Dietplus selalu berusaha menggunakan bahan makanan Organik dan Alami yang bisa kami temukan dari perkebunan lokal. Dengan minyak sehat terbaik serta teknik memasak yang baik sehingga nutrisi makanan tetap terjaga sampai ke meja anda.</p><br/>                  
                    </div>
                    <FormSearch/> 
            </Container>
        );
    }
}

export default TableDes;