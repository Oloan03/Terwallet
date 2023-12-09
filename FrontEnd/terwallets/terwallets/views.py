from pyramid.view import view_config
from pyramid.response import Response
import json

class TerwalletViews:
    def __init__(self, request):
        self.request = request
        
    @view_config(route_name='dashboard', renderer='json')
    def dashboard(self):
        saldo = 1000.00
        pemasukkan = [{"amount": 500, "deskripsi": "Gaji"}, {"amount": 200, "deskripsi": "bonus"}]
        pengeluaran = [{"amount": 300, "deskripsi": "belanja"}, {"amount": 100, "deskripsi": "makan"}]
        
        
        return {
            'saldo': saldo,
            'pemasukkan': pemasukkan,
            'pengeluaran': pengeluaran
        }