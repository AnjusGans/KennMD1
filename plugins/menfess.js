// Fitur By Zivsan And Haori Kasih Credits Dong Stah
const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 628xxxxxxxxxx|hai owner', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6285158866902|Hi Jarot Hehehe ๐น', body: 'Oscarbot By Jarot', thumbnail: await (await fetch('https://telegra.ph/file/345dfdd724db22d617ed3.jpg')).buffer(),}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6285158866902|Hi Jarot Hehehe ๐น', body: 'Oscarbot By Jarot', thumbnail: await (await fetch('https://telegra.ph/file/345dfdd724db22d617ed3.jpg')).buffer(),}}})
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282181825945?text=.chat 6285158866902|Hi Jarot Hehehe ๐น', body: 'Oscarbot By Jarot', thumbnail: await (await fetch('https://telegra.ph/file/345dfdd724db22d617ed3.jpg')).buffer(),}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)

โฌกโโโฌกโโโโโโโโโโฌกโโโฌก

๐ Pesan : ${pesan}

โฌกโโโฌกโโโโโโโโโโฌกโโโฌก

Maaf Anda Belum Bisa Membalas ke Pengirim`

let jarot = `โฎPENGIRIM RAHASIA ใ 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .chat nomor|pesan untuknya

Contoh: #chat 628xxxxxxxxxx|hai owner`

    conn.send2ButtonImg(chat + '@s.whatsapp.net', await(await fetch('https://telegra.ph/file/aa06b2e4067f6a6387b75.jpg')).buffer(), chat1, jarot, 'Menu', '.menu', 'Donasi', '.donasi', m)
    
    let logs = `BOT AKAN BLOKIR KONTAKMU?
    
โซ Spam
โซ Chat Aneh Aneh
โซ Berantem`

 let haori1 = `Sukses Mengirim Pesan
๐ฅ Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

โฌกโโโฌกโโโโโโโโโโฌกโโโฌก

Isi Pesan : ${pesan}

โฌกโโโฌกโโโโโโโโโโฌกโโโฌก`
    conn.send2ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/9ceda8d2274e97bad5bca.jpg')).buffer(), logs, haori1, 'Owner', 'owner', 'Donasi', '.donasi', m)
}
handler.help = ['menfess <nomor|pesan>']
handler.tags = ['main']
handler.command = /^(menfess)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
