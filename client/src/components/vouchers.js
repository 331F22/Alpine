import * as React from 'react';
import "./App/App.css"

export default function VoucherTable() {
    return(
        <>
            <div>
                <h1>Vouchers available</h1>
                <button class="import-voucher"> Import Vouchers </button>

                <table className="table">
                    <thead class="tHead">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Voucher Code</th>
                        <th scope="col">Date Added</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>a098dsf</td>
                        <td>12/01/22</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>a098dsf</td>
                        <td>12/01/22</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>a098dsf</td>
                        <td>12/01/22</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}