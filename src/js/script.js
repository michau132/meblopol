//  Liv. Irreg. D. N. cavi vs ANA

IF(OR(GFP_Tipologia_Tratta__c == 'Aerea', GFP_Tipologia_Tratta__c == 'aerea'),
  IF(GFP_SAL_As_Built__r.RecordType.Name == 'SAL',
    IF(GFP_Numero_cavi_ottici__c - GFP_Numero_cavi_ottici_Anagrafica_GID__c <= 0,
      IF(GFP_Numero_cavi_ottici__c - GFP_Numero_cavi_ottici_Anagrafica_GID__c == 0,
        "0",
        "1"
      ),
      IF(AND(ISPICKVAL(GFP_Tipo_Cavi__c, 'P'), OR(ISPICKVAL(GFP_Tipo_Linea__c, 'MT'), ISPICKVAL(GFP_Tipo_Linea__c, 'BT'))),
        IF(ISPICKVAL(GFP_Tipo_Linea__c, 'MT'),
          IF(GFP_Numero_cavi_ottici__c - GFP_Numero_cavi_ottici_Anagrafica_GID__c <= 4,
            "2",
            "3"
          ),
          //dodac kolejnego ifa ale jest popierdolone jakis kevlar nie czaje o co chodzi, zapytac lucka
        ),
        IF(AND(ISPICKVAL(GFP_Tipo_Cavi__c, 'F'),GFP_Numero_cavi_ottici__c - GFP_Numero_cavi_ottici_Anagrafica_GID__c > 5),
          "3",
          "2"
        )
      )
    ),
    ''
  ),
  ''
)


