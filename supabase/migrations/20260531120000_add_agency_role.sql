-- Agenzie viaggi: aggiunge il valore di ruolo 'agency'.
--
-- NB: viene tenuto in una migration separata perché un nuovo valore di enum
-- deve essere "committato" prima di poter essere usato in altre istruzioni.
-- Le migration successive (e l'app) possono quindi usare 'agency' in sicurezza.

alter type user_role add value if not exists 'agency';
