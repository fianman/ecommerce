import React from 'react';
import { Container, Table } from 'mdbreact';
import FormSearch from './FormSearch';

class TableAdd extends React.Component {
    render() {
        return (    
            <Container className="container-fluid">
                <div className="col-md-12">
                    <strong><h3>Additional information</h3></strong>
                    <Table bordered >
                      
                            
                            <tr>
                            <td>Min. Order</td>
                            <td>10 Hari (Max. 20 hari). Masukan jumlah hari pada kolom qty di sebelah 'ADD TO CART'.</td>
                            </tr>
                            <tr>
                            <td>For Whom</td>
                            <td>Untuk bekal makan siang anak usia 4 – 9 tahun. Bisa diantar kerumah atau kesekolah.</td>
                            </tr>
                            <tr>
                            <td>Lunch, Dinner</td>
                            <td>Hanya Lunch</td>
                            </tr>
                            <tr>
                            <td>Energy</td>
                            <td>150 – 250 kalori per sekali makan</td>
                            </tr>
                            <tr>
                            <td>Nutrition Notes</td>
                            <td>Cukup gula, garam, cukup karbohidrat dan kalori, tinggi serat dan protein.</td>
                            </tr>
                            <tr>
                            <td>Personal Dietitian</td>
                            <td>– Broadcast harian via Whatsapp mengenai menu hari ini, jumlah kalori, gramasi makro nutrisi, serta info bermanfaat lainmya, selama anda mengikuti program.
                        – Konsultasi gizi gratis selama mengikuti program</td>
                            </tr>
                            <tr>
                            <td>Packaging</td>
                            <td>Food grade plastic lunch box, Microwave-safe, Recycle-able, Include plastic spoon, fork and napkin.</td>
                            </tr>
                        
                    </Table>

                    <FormSearch/>
                </div>
            </Container>
        );
    }
}

export default TableAdd;