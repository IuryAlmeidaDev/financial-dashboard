import { put, list } from '@vercel/blob';

const BLOB_PATH = 'data/transactions.json';

const defaultTransactions = [
  {"id":"2026-09-01|Aluguel|-2000|0","date":"2026-09-01","description":"Aluguel","category":"Casa","amount":-2000,"status":"Não pago"},
  {"id":"2026-09-01|Pensão|-2000|1","date":"2026-09-01","description":"Pensão","category":"Família e filhos","amount":-2000,"status":"Não pago"},
  {"id":"2026-09-01|Caução 3/3|-500|2","date":"2026-09-01","description":"Caução 3/3","category":"Casa","amount":-500,"status":"Não pago"},
  {"id":"2026-09-01|STZ | Igor 2/2|-94.22|3","date":"2026-09-01","description":"STZ | Igor 2/2","category":"Compras","amount":-94.22,"status":"Não pago"},
  {"id":"2026-09-01|Igor | CODEX|-100|4","date":"2026-09-01","description":"Igor | CODEX","category":"Assinaturas e serviços","amount":-100,"status":"Não pago"},
  {"id":"2026-09-01|Igor | Foto 2/2|-110|5","date":"2026-09-01","description":"Igor | Foto 2/2","category":"Compras","amount":-110,"status":"Não pago"},
  {"id":"2026-09-01|Igor | Magazine|-74|6","date":"2026-09-01","description":"Igor | Magazine","category":"Dívidas e empréstimos","amount":-74,"status":"Não pago"},
  {"id":"2026-09-01|Igor | Cortina|-43.96|7","date":"2026-09-01","description":"Igor | Cortina","category":"Casa","amount":-43.96,"status":"Não pago"},
  {"id":"2026-09-01|Renda|14394.26|8","date":"2026-09-01","description":"Renda","category":"Salário","amount":14394.26,"status":"Não pago"},
  {"id":"2026-09-03|Boticario 2/3|-108.66|9","date":"2026-09-03","description":"Boticario 2/3","category":"Cuidados pessoais","amount":-108.66,"status":"Não pago"},
  {"id":"2026-09-07|Internet|-20|10","date":"2026-09-07","description":"Internet","category":"Assinaturas e serviços","amount":-20,"status":"Não pago"},
  {"id":"2026-09-07|Spotify|-12.9|11","date":"2026-09-07","description":"Spotify","category":"Assinaturas e serviços","amount":-12.9,"status":"Não pago"},
  {"id":"2026-09-08|Merli+|-19.99|12","date":"2026-09-08","description":"Merli+","category":"Assinaturas e serviços","amount":-19.99,"status":"Não pago"},
  {"id":"2026-09-10|TV 55 Samsung 3/9|-259.9|13","date":"2026-09-10","description":"TV 55 Samsung 3/9","category":"Compras","amount":-259.9,"status":"Não pago"},
  {"id":"2026-09-10|Beatriz | Perfume 2/2|-122.77|14","date":"2026-09-10","description":"Beatriz | Perfume 2/2","category":"Compras","amount":-122.77,"status":"Não pago"},
  {"id":"2026-09-11|Prime Video|-9.99|15","date":"2026-09-11","description":"Prime Video","category":"Assinaturas e serviços","amount":-9.99,"status":"Não pago"},
  {"id":"2026-09-15|Liquidificador 3/4|-34|16","date":"2026-09-15","description":"Liquidificador 3/4","category":"Compras","amount":-34,"status":"Não pago"},
  {"id":"2026-09-15|Organizze|-35|17","date":"2026-09-15","description":"Organizze","category":"Assinaturas e serviços","amount":-35,"status":"Não pago"},
  {"id":"2026-09-15|Academia|-149.9|18","date":"2026-09-15","description":"Academia","category":"Cuidados pessoais","amount":-149.9,"status":"Não pago"},
  {"id":"2026-10-01|Aluguel|-2000|19","date":"2026-10-01","description":"Aluguel","category":"Casa","amount":-2000,"status":"Não pago"},
  {"id":"2026-10-01|Pensão|-2000|20","date":"2026-10-01","description":"Pensão","category":"Família e filhos","amount":-2000,"status":"Não pago"},
  {"id":"2026-10-01|Igor | CODEX|-100|21","date":"2026-10-01","description":"Igor | CODEX","category":"Assinaturas e serviços","amount":-100,"status":"Não pago"},
  {"id":"2026-10-03|Boticario 3/3|-108.66|22","date":"2026-10-03","description":"Boticario 3/3","category":"Cuidados pessoais","amount":-108.66,"status":"Não pago"},
  {"id":"2026-10-07|Internet|-20|23","date":"2026-10-07","description":"Internet","category":"Assinaturas e serviços","amount":-20,"status":"Não pago"},
  {"id":"2026-10-07|Spotify|-12.9|24","date":"2026-10-07","description":"Spotify","category":"Assinaturas e serviços","amount":-12.9,"status":"Não pago"},
  {"id":"2026-10-08|Merli+|-19.99|25","date":"2026-10-08","description":"Merli+","category":"Assinaturas e serviços","amount":-19.99,"status":"Não pago"},
  {"id":"2026-10-10|TV 55 Samsung 4/9|-259.9|26","date":"2026-10-10","description":"TV 55 Samsung 4/9","category":"Compras","amount":-259.9,"status":"Não pago"},
  {"id":"2026-10-11|Prime Video|-9.99|27","date":"2026-10-11","description":"Prime Video","category":"Assinaturas e serviços","amount":-9.99,"status":"Não pago"},
  {"id":"2026-10-15|Liquidificador 4/4|-34|28","date":"2026-10-15","description":"Liquidificador 4/4","category":"Compras","amount":-34,"status":"Não pago"},
  {"id":"2026-10-15|Organizze|-35|29","date":"2026-10-15","description":"Organizze","category":"Assinaturas e serviços","amount":-35,"status":"Não pago"},
  {"id":"2026-10-15|Academia|-149.9|30","date":"2026-10-15","description":"Academia","category":"Cuidados pessoais","amount":-149.9,"status":"Não pago"},
  {"id":"2026-11-01|Aluguel|-2000|31","date":"2026-11-01","description":"Aluguel","category":"Casa","amount":-2000,"status":"Não pago"},
  {"id":"2026-11-01|Pensão|-2000|32","date":"2026-11-01","description":"Pensão","category":"Família e filhos","amount":-2000,"status":"Não pago"},
  {"id":"2026-11-01|Igor | CODEX|-100|33","date":"2026-11-01","description":"Igor | CODEX","category":"Assinaturas e serviços","amount":-100,"status":"Não pago"},
  {"id":"2026-11-07|Internet|-20|34","date":"2026-11-07","description":"Internet","category":"Assinaturas e serviços","amount":-20,"status":"Não pago"},
  {"id":"2026-11-07|Spotify|-12.9|35","date":"2026-11-07","description":"Spotify","category":"Assinaturas e serviços","amount":-12.9,"status":"Não pago"},
  {"id":"2026-11-08|Merli+|-19.99|36","date":"2026-11-08","description":"Merli+","category":"Assinaturas e serviços","amount":-19.99,"status":"Não pago"},
  {"id":"2026-11-10|TV 55 Samsung 5/9|-259.9|37","date":"2026-11-10","description":"TV 55 Samsung 5/9","category":"Compras","amount":-259.9,"status":"Não pago"},
  {"id":"2026-11-11|Prime Video|-9.99|38","date":"2026-11-11","description":"Prime Video","category":"Assinaturas e serviços","amount":-9.99,"status":"Não pago"},
  {"id":"2026-11-15|Organizze|-35|39","date":"2026-11-15","description":"Organizze","category":"Assinaturas e serviços","amount":-35,"status":"Não pago"},
  {"id":"2026-11-15|Academia|-149.9|40","date":"2026-11-15","description":"Academia","category":"Cuidados pessoais","amount":-149.9,"status":"Não pago"},
  {"id":"2026-12-01|Aluguel|-2000|41","date":"2026-12-01","description":"Aluguel","category":"Casa","amount":-2000,"status":"Não pago"},
  {"id":"2026-12-01|Pensão|-2000|42","date":"2026-12-01","description":"Pensão","category":"Família e filhos","amount":-2000,"status":"Não pago"},
  {"id":"2026-12-01|Igor | CODEX|-100|43","date":"2026-12-01","description":"Igor | CODEX","category":"Assinaturas e serviços","amount":-100,"status":"Não pago"},
  {"id":"2026-12-07|Internet|-20|44","date":"2026-12-07","description":"Internet","category":"Assinaturas e serviços","amount":-20,"status":"Não pago"},
  {"id":"2026-12-07|Spotify|-12.9|45","date":"2026-12-07","description":"Spotify","category":"Assinaturas e serviços","amount":-12.9,"status":"Não pago"},
  {"id":"2026-12-08|Merli+|-19.99|46","date":"2026-12-08","description":"Merli+","category":"Assinaturas e serviços","amount":-19.99,"status":"Não pago"},
  {"id":"2026-12-10|TV 55 Samsung 6/9|-259.9|47","date":"2026-12-10","description":"TV 55 Samsung 6/9","category":"Compras","amount":-259.9,"status":"Não pago"},
  {"id":"2026-12-11|Prime Video|-9.99|48","date":"2026-12-11","description":"Prime Video","category":"Assinaturas e serviços","amount":-9.99,"status":"Não pago"},
  {"id":"2026-12-15|Organizze|-35|49","date":"2026-12-15","description":"Organizze","category":"Assinaturas e serviços","amount":-35,"status":"Não pago"},
  {"id":"2026-12-15|Academia|-149.9|50","date":"2026-12-15","description":"Academia","category":"Cuidados pessoais","amount":-149.9,"status":"Não pago"}
];

async function getStoredTransactions() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return defaultTransactions;
  }
  try {
    const { blobs } = await list({ prefix: BLOB_PATH });
    const target = blobs.find(b => b.pathname === BLOB_PATH) || blobs[0];
    if (target) {
      const response = await fetch(target.url, { cache: 'no-store' });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    }
  } catch (err) {
    console.error('Error fetching from Vercel Blob:', err);
  }
  // Initialize blob with default data if empty
  await saveTransactions(defaultTransactions);
  return defaultTransactions;
}

async function saveTransactions(transactions) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return false;
  }
  try {
    await put(BLOB_PATH, JSON.stringify(transactions, null, 2), {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      cacheControlMaxAge: 0
    });
    return true;
  } catch (err) {
    console.error('Error saving to Vercel Blob:', err);
    return false;
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const transactions = await getStoredTransactions();
      return res.status(200).json({ success: true, transactions });
    }

    if (req.method === 'POST') {
      const body = req.body || {};
      const { action, transaction, id, status, transactions: bulkTransactions } = body;
      let current = await getStoredTransactions();

      if (action === 'update_status') {
        const item = current.find(t => t.id === id);
        if (item) {
          item.status = status;
          await saveTransactions(current);
          return res.status(200).json({ success: true, transactions: current });
        }
        return res.status(404).json({ success: false, message: 'Transação não encontrada' });
      }

      if (action === 'add_transaction') {
        if (!transaction || !transaction.description || !transaction.date) {
          return res.status(400).json({ success: false, message: 'Dados inválidos' });
        }
        const newTx = {
          id: transaction.id || `${transaction.date}|${transaction.description}|${transaction.amount}|${Date.now()}`,
          date: transaction.date,
          description: transaction.description,
          category: transaction.category || 'Outros',
          amount: Number(transaction.amount) || 0,
          status: transaction.status || 'Não pago'
        };
        current.push(newTx);
        await saveTransactions(current);
        return res.status(201).json({ success: true, transactions: current, added: newTx });
      }

      if (action === 'delete_transaction') {
        current = current.filter(t => t.id !== id);
        await saveTransactions(current);
        return res.status(200).json({ success: true, transactions: current });
      }

      if (action === 'sync_all' && Array.isArray(bulkTransactions)) {
        await saveTransactions(bulkTransactions);
        return res.status(200).json({ success: true, transactions: bulkTransactions });
      }

      return res.status(400).json({ success: false, message: 'Ação não reconhecida' });
    }

    return res.status(405).json({ success: false, message: 'Método não permitido' });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
