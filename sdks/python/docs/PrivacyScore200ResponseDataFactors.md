# PrivacyScore200ResponseDataFactors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_reuse** | [**PrivacyScore200ResponseDataFactorsAddressReuse**](PrivacyScore200ResponseDataFactorsAddressReuse.md) |  | [optional] 
**amount_patterns** | [**PrivacyScore200ResponseDataFactorsAddressReuse**](PrivacyScore200ResponseDataFactorsAddressReuse.md) |  | [optional] 
**timing_correlation** | [**PrivacyScore200ResponseDataFactorsAddressReuse**](PrivacyScore200ResponseDataFactorsAddressReuse.md) |  | [optional] 
**counterparty_exposure** | [**PrivacyScore200ResponseDataFactorsAddressReuse**](PrivacyScore200ResponseDataFactorsAddressReuse.md) |  | [optional] 

## Example

```python
from sipher_client.models.privacy_score200_response_data_factors import PrivacyScore200ResponseDataFactors

# TODO update the JSON string below
json = "{}"
# create an instance of PrivacyScore200ResponseDataFactors from a JSON string
privacy_score200_response_data_factors_instance = PrivacyScore200ResponseDataFactors.from_json(json)
# print the JSON string representation of the object
print(PrivacyScore200ResponseDataFactors.to_json())

# convert the object into a dict
privacy_score200_response_data_factors_dict = privacy_score200_response_data_factors_instance.to_dict()
# create an instance of PrivacyScore200ResponseDataFactors from a dict
privacy_score200_response_data_factors_from_dict = PrivacyScore200ResponseDataFactors.from_dict(privacy_score200_response_data_factors_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


