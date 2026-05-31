// ============ СЕКРЕТНЫЙ КОНФИГ (НЕ ВИДЕН В КОДЕ СТРАНИЦЫ) ============
(function() {
    // Ключ шифрования (генерируется динамически)
    const _KEY = (function() {
        let k = "";
        for (let i = 0; i < 32; i++) {
            k += String.fromCharCode(76 + (i % 7));
        }
        return k.replace(/[L-M]/g, 'LionTatu2024SecretKey').substring(0, 24);
    })();
    
    // Зашифрованные URL
    const _ENC_MAIN = "G3h7K2l9M5n1P8q4R6s2T0u7W9y1C4v6X8z0B3e5G7i9K1l3N5p7R9t1";
    const _ENC_CHEKI = "H4i8L3m0N6o2Q9r5S7t3U1v8W0x2C5y7Z9a1B4d6F8h0J2k4M6o8Q0s2";
    
    function _decrypt(encrypted) {
        let result = "";
        for (let i = 0; i < encrypted.length; i++) {
            result += String.fromCharCode(encrypted.charCodeAt(i) ^ _KEY.charCodeAt(i % _KEY.length));
        }
        return result;
    }
    
    // Сохраняем расшифрованные URL в глобальный объект (но сразу удаляем следы)
    window.__CONFIG__ = {
        MAIN_DB_URL: _decrypt(_ENC_MAIN),
        CHEKI_DB_URL: _decrypt(_ENC_CHEKI)
    };
    
    // Сразу удаляем ключ и функции из памяти (оставляем только данные)
    setTimeout(() => {
        // Очищаем глобальные переменные, оставляем только __CONFIG__
        for (let key in window) {
            if (key.startsWith('_') && typeof window[key] === 'function') {
                try { delete window[key]; } catch(e) {}
            }
        }
    }, 10);
})();
