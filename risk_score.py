def covid(input_X, input_A, input_H, input_D, input_Un, input_noc, input_ch, input_N, input_L, input_DB):
  cf_X=1.2205
  cf_A=0.0276
  cf_H=1.5116
  cf_D=0.632
  cf_Un=1.5494
  cf_noc=0.4668
  cf_ch=1.4037
  cf_N= 0.0562
  cf_L= 0.0024
  cf_DB= 0.1376

  sum= (input_X*cf_X)+(input_A*cf_A)+(input_H*cf_H)+(input_D*cf_D)+(input_Un*cf_Un)+(input_noc*cf_noc)+(input_ch*cf_ch)+(input_N*cf_N)+(input_L*cf_L)+(input_DB*cf_DB)-6.6127
  risk_score= math.exp(sum)/(1+math.exp(sum))
  return risk_score
  
tmp_X = int(input())
tmp_A = int(input())
tmp_H = int(input())
tmp_D = int(input())
tmp_Un = int(input())
tmp_noc = int(input())
tmp_ch = int(input())
tmp_N = float(input())
tmp_L= float(input())
tmp_DB= float(input())


score= covid(tmp_X, tmp_A, tmp_H, tmp_D, tmp_Un, tmp_noc, tmp_ch, tmp_N, tmp_L, tmp_DB)
print(score)
per_score= score*100
if(per_score< 1.7):
  print("Low Risk")
elif(per_score>=1.7 and per_score< 40.04):
  print("Medium Risk")
else:
  print("High Risk")
